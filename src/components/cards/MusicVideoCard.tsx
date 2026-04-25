"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MusicVideo } from "@/data/projects";
import ChromeBorder from "@/components/ui/ChromeBorder";

export default function MusicVideoCard({ video }: { video: MusicVideo }) {
  return (
    <div className="group flex flex-col cursor-pointer">
      <ChromeBorder radius="md" className="aspect-video mb-4 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
        <LiteYouTubeEmbed
          id={video.youtubeId}
          title={video.title}
          poster="maxresdefault"
          wrapperClass="yt-lite h-full w-full object-cover"
        />
      </ChromeBorder>
      <div className="px-1">
        <h3 className="text-paper font-sans font-semibold text-lg leading-snug group-hover:text-silver-muted transition-colors">{video.title}</h3>
        <p className="text-silver-dim text-sm font-sans mt-0.5">{video.artist}</p>
      </div>
    </div>
  );
}
