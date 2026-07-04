# Videos Folder

Place your video clips (`.mp4`, `.webm`) in this folder.

You can reference them in your `src/app/data/mediaData.ts` file using absolute web paths like:
`"/assets/videos/your-video.mp4"`

For example:
```typescript
{
  id: "1",
  image: "/assets/images/first_date.jpg",
  videoUrl: "/assets/videos/first_date_clip.mp4",
  title: "Our First Date",
  ...
}
```
