import { getComments } from "../comment";

export async function GET(req, res, params) {
  const id = params;
  console.log(id);

  const comments = await getComments();

  if (!comments) {
    throw new Error("Failed to retrieve comments");
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.status(404).json({ error: "Comment not found" });
  }

  return Response.json(comment);
}
