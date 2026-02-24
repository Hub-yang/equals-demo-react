import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  presetWind4,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  shortcuts: [],
})
