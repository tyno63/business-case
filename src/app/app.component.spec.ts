import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Start test for AppComponent.
describe('AppComponent', () => {
  // Executed before each test. Simulate your application.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // TestBed is your test environment (simulate your Web Browser).
    const fixture = TestBed.createComponent(AppComponent); // Load/Create AppComponent
    const app = fixture.componentInstance; // Get the created instance of AppComponent (the object of your component).
    expect(app) // test the app variable
      .toBeTruthy(); // Check if the variable is not empty.
  });

  it(`should have as title 'bc-backoffice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bc-backoffice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Render the component with data from object (generate HTML).
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bc-backoffice app is running!');
  });

  it('should render an image logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // document.querySelector('your-component);

    const $img = compiled.querySelector('img');
    expect($img).toBeTruthy();
  });
});
