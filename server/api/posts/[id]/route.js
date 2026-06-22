import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
	try {
		// Await params in Next.js 15+
		const { id } = await params;

		console.log("Fetching post with id:", id);
		const client = await clientPromise;
		const db = client.db("resources");

		// First try to find by string id
		let post = await db.collection("website-resource").findOne({ id: id });

		// If not found, try to find by ObjectId
		if (!post) {
			try {
				post = await db.collection("website-resource").findOne({
					_id: new ObjectId(id),
				});
			} catch (error) {
				console.error("Invalid ObjectId format:", error);
			}
		}

		if (!post) {
			return NextResponse.json(
				{ error: "Post not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(post);
	} catch (e) {
		console.error(e);
		return NextResponse.json(
			{ error: "Failed to fetch post" },
			{ status: 500 }
		);
	}
}
