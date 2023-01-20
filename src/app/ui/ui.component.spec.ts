import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Area method', () => {
    // Arrange
    let result
    component.base = 5;
    component.altura = 6;

    
    // Act
    component.Area();
    result = component.resultado;

    // Assert
    expect(result).toEqual(15);
  });

  it('Should set base model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="base"]')).nativeElement;

    // Act 
    inputElement.value = '5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.base).toEqual(5); 
  });

  it('Should set altura model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="altura"]')).nativeElement;

    // Act 
    inputElement.value = '6';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.altura).toEqual(6); 
  });

 it('should add base and altura when i click the mean button ', () => {
   // Arrange 
   component.base = 5;
   component.altura = 6;
   let meanButton = fixture.debugElement.query(By.css('.button'));

   // Act
   meanButton.triggerEventHandler('click', null);

   // Assert
   expect(component.resultado).toEqual(15);

  });

 it('Should render resultado in calcular div', () => {
   // Arrange
   component.base = 5;
   component.altura = 6;

   // Act
   component.Area();
   fixture.detectChanges();
   
   let de = fixture.debugElement.query(By.css('.result'));
   let el : HTMLElement = de.nativeElement;

   // Assert
   expect(el.innerText).toContain('15');
    
 });
});
