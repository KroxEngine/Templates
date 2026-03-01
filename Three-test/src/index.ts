import { Engine } from '@krox/core';
import { ENGINE_CONFIG, ENGINE_MODULES } from './config';
import { AdAPI } from '../../../packages/adapi';

const engineInstance = new Engine(ENGINE_CONFIG, ENGINE_MODULES);

engineInstance.on(Engine.events.INITIALIZED, AdAPI.gameReady.bind(AdAPI));

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', engineInstance.init.bind(engineInstance));
} else {
  engineInstance.init();
}

export default engineInstance as Engine;