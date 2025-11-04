"use client";
import { formatDate } from "@/utils/formatDate";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Comment } from "../page";

interface CommentItemProps {
  comment: Comment;
  depth?: number;
  onReply: (parentId: string, text: string) => void;
}

export default function CommentItem({
  comment,
  onReply,
  depth = 0,
}: CommentItemProps) {
  const [openReply, setOpenReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const isMaxDepth = depth >= 2; // Giới hạn 3 cấp: 0, 1, 2

  return (
    <div
      className={`rounded-lg p-3 ${
        depth === 0
          ? "bg-slate-50 shadow-sm"
          : depth === 1
          ? "bg-slate-100"
          : "bg-slate-200"
      }`}
    >
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
          {comment.avatar ? (
            <Image
              src={comment.avatar}
              alt={comment.author}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {comment.author[0].toUpperCase()}
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{comment.author}</div>
              <div className="text-xs text-slate-500">
                {formatDate(comment.createdAt)}
              </div>
            </div>

            {!isMaxDepth && (
              <button
                className="text-xs text-orange-500 hover:underline"
                onClick={() => setOpenReply((s) => !s)}
              >
                Reply
              </button>
            )}
          </div>

          <div className="mt-2 text-sm text-slate-700">{comment.content}</div>

          {/* Reply form */}
          <AnimatePresence>
            {openReply && !isMaxDepth && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pl-10"
              >
                <div className="flex gap-2">
                  <input
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Viết phản hồi..."
                    className="flex-1 rounded-lg border px-3 py-2 text-sm"
                  />
                  <button
                    onClick={() => {
                      if (replyText.trim()) {
                        onReply(comment.id, replyText.trim());
                        setReplyText("");
                        setOpenReply(false);
                      }
                    }}
                    className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                  >
                    Gửi
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Child replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3 space-y-3 pl-10 border-l-2 border-slate-200">
              {comment.replies.map((r) => (
                <CommentItem
                  key={r.id}
                  comment={r}
                  depth={depth + 1}
                  onReply={onReply}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
