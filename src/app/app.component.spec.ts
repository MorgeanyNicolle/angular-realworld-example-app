import { AppComponent } from './app.component';
import { UserService } from './core';

describe('AppComponent', () => {
  it('debe cargar el usuario al iniciar', () => {
    const userService = jasmine.createSpyObj<UserService>(
      'UserService',
      ['populate']
    );
    const component = new AppComponent(userService);

    expect(userService.populate).not.toHaveBeenCalled();

    component.ngOnInit();

    expect(userService.populate).toHaveBeenCalledTimes(1);
  });
});
