import React from "react";
import "./MessageCard.css";

interface MessageCardProps {
  title: string;
  message: string;
  type?: "success" | "danger" | "warning"; // optional prop
}

const MessageCard: React.FC<MessageCardProps> = ({
  title,
  message,
  type = "success",
}) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <p className="alert-heading">{title} </p>

      <p className="message">{message}</p>
    </div>
  );
};

export default MessageCard;
