import {GeneratorScene, Scene} from '@motion-canvas/core/lib/scenes';
import {TwoDView} from './TwoDView';

export class TwoDScene extends GeneratorScene<TwoDView> {
  private readonly view = new TwoDView();

  public getView(): TwoDView {
    return this.view;
  }

  public render(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ): void {
    context.save();
    this.view.render(context);
    context.restore();
  }

  public reset(previousScene?: Scene): Promise<void> {
    this.view.removeChildren();
    return super.reset(previousScene);
  }
}
