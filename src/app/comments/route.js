import { NextResponse } from "next/server";
import { people } from "./comment";
import { headers } from "next/headers";

export async function GET(req, res) {
  return NextResponse.json(people);
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
