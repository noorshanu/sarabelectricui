type OptimizedImageProps = {
  fallback: string;
  webp: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fill?: boolean;
};

export default function OptimizedImage({
  fallback,
  webp,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  fill = false,
}: OptimizedImageProps) {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : "auto";

  const imgClasses = fill
    ? `absolute inset-0 h-full w-full object-cover ${imgClassName}`
    : imgClassName;

  if (fill) {
    return (
      <picture className={`absolute inset-0 block ${className}`}>
        <source srcSet={webp} type="image/webp" />
        <img
          src={fallback}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className={imgClasses}
        />
      </picture>
    );
  }

  return (
    <picture className={className}>
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={imgClasses}
      />
    </picture>
  );
}
