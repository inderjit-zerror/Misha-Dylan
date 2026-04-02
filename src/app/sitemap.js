export default function sitemap() {
  const baseUrl = "https://www.sonalskushie.com/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/wedding`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/venue`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}