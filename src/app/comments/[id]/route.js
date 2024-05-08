import { NextResponse } from "next/server";
import { people } from "../comment";

export async function GET(req, { params }) {
  const { id } = params;

  const comment = people.find((comment) => comment.id === parseInt(id));

  // console.log(comment);

  return NextResponse.json(comment);
}
export async function PATCH(req, { params }) {
  const { id } = params;
  console.log(id);
  const body = await req.json();
  const { name, age, skill } = body;

  const comment = people.findIndex((comment) => comment.id === parseInt(id));
  const targetPeople = people[comment];

  console.log(targetPeople);
  targetPeople.name = name;
  targetPeople.age = age;
  targetPeople.skill = skill;
  console.log(targetPeople);

  return NextResponse.json(targetPeople);
}
export async function DELETE(req, { params }) {
  const { id } = params;
  console.log(id);

  const comment = people.findIndex((comment) => comment.id === parseInt(id));
  console.log(comment);
  const deletedComment = people[comment];
  people.splice(comment, 1);

  return NextResponse.json(deletedComment);
}
