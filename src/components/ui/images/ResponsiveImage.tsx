type Props = {
  src: string;
  size: string;
}

export default function ResponsiveImage({ src, }: Props) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={src}
          alt="Cover"
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
