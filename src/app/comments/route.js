import { NextResponse } from "next/server";
import { people } from "./comment";
import { headers } from "next/headers";

export async function GET(req, res) {
  return NextResponse.json(people);
}
export async function POST(req, res) {
  const comment = await req.json();
  const newcomment = {
    id: people.length + 1,
    text: comment.text,
  };
  people.push(newcomment);
  return (
    NextResponse.json(JSON.stringify(newcomment)),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    }
  );
}
