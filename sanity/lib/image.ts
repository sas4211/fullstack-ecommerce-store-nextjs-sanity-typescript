import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env'
import imageUrlBuilder from "@sanity/image-url";

// https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
