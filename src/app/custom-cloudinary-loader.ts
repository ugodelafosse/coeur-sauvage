import { ImageLoaderConfig } from '@angular/common';
import { LegacyTransformation } from '@cloudinary/url-gen/types/types';

// Reexport the type from the Cloudinary SDK for the transformation config
export type TransformationConfig = LegacyTransformation;

export function customCloudinaryLoader(config: ImageLoaderConfig) {
  // Specify your Cloudinary URL here
  const path = `https://res.cloudinary.com/dbafuvwfq`;

  // For a placeholder image, we use the lowest image setting available to reduce the load time
  // else we use the auto size
  // const quality = config.isPlaceholder ? 'q_auto:low' : 'q_auto';
  //
  // let params = `${quality}`;
  // if (config.width) {
  //   params += `,w_${config.width}`;
  // }
  // if (config.loaderParams && config.loaderParams['transformation']) {
  //   // Generate the transformation string from the loaderParams object using the Cloudinary SDK
  //   params += `,${transformationStringFromObject(
  //     config.loaderParams['transformation'],
  //   )}`;
  // }

  // Return the Cloudinary URL with the specified transformations
  return `${path}/image/upload/coeur-sauvage/${config.src}`;
}
