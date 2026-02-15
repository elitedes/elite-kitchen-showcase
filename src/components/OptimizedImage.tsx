import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Set to true for above-the-fold images (hero, first visible content). Defaults to lazy. */
    priority?: boolean;
}

/**
 * Image component with built-in performance best practices:
 * - loading="lazy" by default (eager for priority images)
 * - decoding="async" to avoid blocking the main thread
 * - Always pass width/height to prevent CLS
 */
const OptimizedImage = ({
    priority = false,
    loading,
    decoding,
    ...props
}: OptimizedImageProps) => (
    <img
        loading={loading ?? (priority ? 'eager' : 'lazy')}
        decoding={decoding ?? 'async'}
        {...props}
    />
);

export default OptimizedImage;
