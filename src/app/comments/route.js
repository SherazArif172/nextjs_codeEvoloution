import { NextRequest, NextResponse } from "next/server";
import { people } from "./comment";

export async function GET(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  console.log(name);
  const filteredComments = name
    ? people
        .filter((comment) => comment.name === name)
        .filter((user) => user.age === parseInt(age))
    : people;
  // console.log(filteredComments);
  // console.log(req.nextUrl.searchParams);
  return NextResponse.json(filteredComments);
}
export async function POST(req, res) {
  const body = await req.json();
  const newcomment = {
    id: people.length + 1,
    name: body.name,
    skill: body.skill,
    age: body.age,
  };
  people.push(newcomment);
  return NextResponse.json(people, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
