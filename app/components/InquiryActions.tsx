"use client";

import { MailOpen, Mail } from "lucide-react";
import { markAsRead, markAsUnread } from "@/app/actions/inquiry";

interface InquiryActionsProps {
  id: number;
  read: boolean;
}

export function InquiryActions({ id, read }: InquiryActionsProps) {
  return (
    <form
      action={async () => {
        if (read) {
          await markAsUnread(id);
        } else {
          await markAsRead(id);
        }
      }}
    >
      <button
        type="submit"
        title={read ? "미읽음으로 표시" : "읽음으로 표시"}
        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
      >
        {read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
      </button>
    </form>
  );
}
