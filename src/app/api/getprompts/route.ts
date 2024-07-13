import {connect} from "@/dbConfig/dbConfig"
import { Prompts } from "@/modals/Prompt";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const searchPrompt=request.nextUrl.searchParams.get("prompt") as string;
    const prompts = await Prompts.find({$text:{$search:searchPrompt}}).sort([['created_at', -1]]).limit(30);
    return NextResponse.json({ msg: "Sucess",prompts }, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: `${error}` });
  }
}