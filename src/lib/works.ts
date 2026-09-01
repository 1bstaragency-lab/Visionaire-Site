export type Work = {
  title: string;
  src: string;
  category: "COMMERCIAL" | "MUSIC VIDEO";
  client: string;
};

export const works: Work[] = [
  { title: "CONVERSE", src: "/videos/converse.mp4", category: "COMMERCIAL", client: "CONVERSE" },
  { title: "CDG × CONVERSE", src: "/videos/youtube/3adRUaYNmJ4.mp4", category: "COMMERCIAL", client: "COMME DES GARÇONS" },
  { title: "SKIMS", src: "/videos/youtube/L-iVcooZdt8.mp4", category: "COMMERCIAL", client: "SKIMS" },
  { title: "ASICS", src: "/videos/asics.mp4", category: "COMMERCIAL", client: "ASICS" },
  { title: "ADIDAS", src: "/videos/youtube/QyLYTi9qkSg.mp4", category: "COMMERCIAL", client: "ADIDAS" },
  { title: "TIMBERLAND", src: "/videos/youtube/V7eHmKc31Bg.mp4", category: "COMMERCIAL", client: "TIMBERLAND" },
  { title: "AGENT PROVOCATEUR", src: "/videos/youtube/3T3Dhc5fXxc.mp4", category: "COMMERCIAL", client: "AGENT PROVOCATEUR" },
  { title: "LEVI'S", src: "/videos/youtube/q9EzrDZkvLk.mp4", category: "COMMERCIAL", client: "LEVI'S" },
  { title: "ESCAPE THE FATE", src: "/videos/youtube/f-XYpu7gYuw.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "PARTNERS IN CRYME", src: "/videos/youtube/aUiCkuA4GyY.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "ETERNAL", src: "/videos/youtube/RAZwSj2puyQ.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "SHOT IN THE DARK", src: "/videos/youtube/CvAo-ixDS3c.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "APPLE PAY", src: "/videos/youtube/eWJCHiBNJqE.mp4", category: "MUSIC VIDEO", client: "XRARESTBOY" },
  { title: "TRUST", src: "/videos/youtube/mpk0K9XMtOM.mp4", category: "MUSIC VIDEO", client: "LAYLOW!" },
  { title: "WHEREVER U ARE", src: "/videos/youtube/3mrZBy57Fk0.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX & JAY VERSACE" },
  { title: "FADE", src: "/videos/youtube/ckxOuNMgCq0.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
];
