"use client";
import { SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import ReactionButton from "./_components/ReactionButton";
import { Comment, ReactionCounts } from "./page";
import CommentItem from "./_components/CommentItem";

const Reactions = ({
  initialReactions,
  sampleComments,
}: {
  initialReactions: ReactionCounts;
  sampleComments: Comment[];
}) => {
  // --- Reactions state ---
  const [reactions, setReactions] = useState<ReactionCounts>(initialReactions);
  const [myReaction, setMyReaction] = useState<keyof ReactionCounts | null>(
    null
  );

  function toggleReaction(key: keyof ReactionCounts) {
    setReactions((prev) => {
      const next = { ...prev };
      if (myReaction) next[myReaction] = Math.max(0, next[myReaction] - 1);
      if (myReaction === key) {
        setMyReaction(null);
        return next;
      }
      next[key] = next[key] + 1;
      setMyReaction(key);
      return next;
    });
  }

  // --- Comments state ---
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [commentText, setCommentText] = useState("");

  function postComment() {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: `c_${Date.now()}`,
      author: "Bạn",
      content: commentText.trim(),
      createdAt: new Date().toISOString(),
      replies: [],
    };
    setComments((prev) => [newComment, ...prev]);
    setCommentText("");
  }

  // Recursive function để thêm reply vào đúng comment
  function addReplyToTree(
    list: Comment[],
    parentId: string,
    text: string
  ): Comment[] {
    return list.map((c) => {
      if (c.id === parentId) {
        const newReply: Comment = {
          id: `r_${Date.now()}`,
          author: "Bạn",
          content: text,
          createdAt: new Date().toISOString(),
          replies: [],
        };
        return { ...c, replies: [...(c.replies || []), newReply] };
      }
      if (c.replies && c.replies.length > 0) {
        return { ...c, replies: addReplyToTree(c.replies, parentId, text) };
      }
      return c;
    });
  }

  function replyTo(commentId: string, text: string) {
    if (!text.trim()) return;
    setComments((prev) => addReplyToTree(prev, commentId, text.trim()));
  }

  return (
    <div className="mt-6 border-t pt-4 flex flex-col gap-4">
      {/* Reaction Buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        {[
          ["like", "👍", "Like"],
          ["love", "❤️", "Love"],
          ["wow", "😮", "Wow"],
          ["sad", "😢", "Sad"],
          ["angry", "😡", "Angry"],
        ].map(([key, emoji, label]) => (
          <ReactionButton
            key={key}
            label={label}
            emoji={emoji}
            count={reactions[key as keyof ReactionCounts]}
            active={myReaction === key}
            onClick={() => toggleReaction(key as keyof ReactionCounts)}
          />
        ))}
        <div className="ml-auto text-sm text-slate-500">
          {Object.values(reactions).reduce((a, b) => a + b, 0)} reactions
        </div>
      </div>

      {/* Comment input */}
      <div className="mt-2">
        <label className="text-sm font-medium">Bình luận</label>
        <div className="mt-2 flex gap-2">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Viết bình luận..."
            className="flex-1 rounded-lg border px-4 py-2"
          />
          <button
            onClick={postComment}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>

      {/* Comments list */}
      <div className="mt-4 space-y-4">
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            onReply={(id, text) => replyTo(id, text)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reactions;
