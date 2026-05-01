import { useState } from "react";
import { Star } from "lucide-react";

export interface GoogleReview {
  name: string;
  date: string;
  text: string;
  rating: number;
  image?: string;
}

const AVATAR_COLORS = [
  "bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500",
  "bg-pink-500", "bg-indigo-500", "bg-teal-500", "bg-orange-500",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const VerifiedBadge = () => (
  <svg viewBox="0 0 18 18" className="h-4 w-4 ml-1 inline-block" aria-label="Verified">
    <circle cx="9" cy="9" r="9" fill="#1a73e8" />
    <path d="M7.5 12.15l-3-3 1.05-1.05L7.5 10.05l4.95-4.95L13.5 6.15z" fill="white" />
  </svg>
);

export const GoogleReviewCard = ({ review }: { review: GoogleReview }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 120;
  const displayText = expanded || !isLong ? review.text : review.text.slice(0, 120) + "...";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 min-h-[180px] select-none">
      {/* Header: avatar + name/date + Google icon */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {review.image ? (
            <img
              src={review.image}
              alt={review.name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getAvatarColor(review.name)}`}
            >
              {getInitials(review.name)}
            </div>
          )}
          <div>
            <p className="font-semibold text-sm text-gray-900 leading-tight">{review.name}</p>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        </div>
        <GoogleGIcon />
      </div>

      {/* Stars + verified */}
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
          />
        ))}
        <VerifiedBadge />
      </div>

      {/* Review text */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {displayText}
        {isLong && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-600 hover:underline ml-1 text-sm"
          >
            Read more
          </button>
        )}
      </p>
    </div>
  );
};
