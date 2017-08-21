import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfirmationDialogModule } from './../shared/services/confirmation-dialog';
import { JsonStorageModule } from './../json-storage/json-storage.module';

import { HomeComponent } from './home.component';
import { UserService } from './../user/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          HomeComponent
      ],
      imports: [
          ConfirmationDialogModule,
          JsonStorageModule,
          RouterTestingModule
      ],
      providers: [
          UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
