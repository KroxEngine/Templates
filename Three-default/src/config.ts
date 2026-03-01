import { Module, EngineConfig } from '@krox/core';
import { ThreeInteractionManager, ThreeModelLoader, ThreeRenderer, ThreeTextureLoader } from '@krox/three';

import.meta.glob('./Behaviors/**/*.ts', { eager: true });
import.meta.glob('./Scenes/**/*.ts', { eager: true });
import.meta.glob('./Views/**/*.ts', { eager: true });

export const ENGINE_CONFIG = {
    assets: {
        modules: import.meta.glob(['/assets/**', '@assets/**'], {
            eager: true,
            query: '?url',
            import: 'default',
        })
    }
} as EngineConfig;

export const ENGINE_MODULES = [
  ThreeTextureLoader.create({
    path: 'textures'
  }),
  ThreeModelLoader.create({
    path: 'models'
  }),
  ThreeRenderer.create({
    antialias: false,
    sceneConfigsFolder: 'sceneConfigs',
    maxResolution: { width: 1920, height: 1080 },
  }),
  ThreeInteractionManager.create(),
] as Module[];