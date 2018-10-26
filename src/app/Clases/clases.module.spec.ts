import { ClasesModule } from './clases.module';

describe('ClasesModule', () => {
  let clasesModule: ClasesModule;

  beforeEach(() => {
    clasesModule = new ClasesModule();
  });

  it('should create an instance', () => {
    expect(clasesModule).toBeTruthy();
  });
});
