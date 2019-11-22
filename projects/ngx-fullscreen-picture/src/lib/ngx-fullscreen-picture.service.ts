import {
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef,
  Injectable,
  InjectFlags,
  InjectionToken,
  Injector,
  Type
} from '@angular/core';

export class NgxFullscreenConfig {
  src: string;
}

class FullscreenInjector implements Injector {
  constructor(
    private parentInjector: Injector,
    private additionalTokens: WeakMap<any, any>
  ) {}

  get<T>(
    token: Type<T> | InjectionToken<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  get(token: any, notFoundValue?: any);
  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this.additionalTokens.get(token);

    if (value) { return value; }

    return this.parentInjector.get<any>(token, notFoundValue);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgxFullscreenPictureService {

  private componentRef: ComponentRef<any>;
  private domElem: HTMLElement;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  public openPicture(component, config: NgxFullscreenConfig) {
    const map = new WeakMap();
    map.set(NgxFullscreenConfig, config);

    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component)
      .create(new FullscreenInjector(this.injector, map));

    this.appRef.attachView(this.componentRef.hostView);

    this.domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild(this.domElem);

    setTimeout(() => this.domElem.classList.add('show'), 0);
  }

  public closePicture() {
    this.domElem.classList.remove('show');
    setTimeout(() => {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }, 500);
  }
}
