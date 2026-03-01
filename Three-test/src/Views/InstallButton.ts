import { RegisterView, ThreeSprite } from '@krox/three';
import { AdAPI } from '../../../../packages/adapi';

@RegisterView('InstallButton')
export default class InstallButton extends ThreeSprite {
  install() {
    AdAPI.openStore();
  }
}