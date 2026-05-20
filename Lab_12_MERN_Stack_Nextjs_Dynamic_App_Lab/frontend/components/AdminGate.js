"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";

export default function AdminGate({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingState label="Checking access" />;
  }

  if (!user) {
    return (
      <EmptyState
        title="Admin access required"
        description="Log in with an admin account to continue."
        action={
          <Link href="/login" className="action-btn">
            Sign in
          </Link>
        }
      />
    );
  }

  if (user.role !== "admin") {
    return (
      <EmptyState
        title="Access denied"
        description="Your account does not have admin privileges."
      />
    );
  }

  return children;
}
