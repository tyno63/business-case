import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GarageJsonld} from '../models/garage-jsonld';
import {Garage} from '../models/garage';
import {ConstraintViolationList} from '../models/constraint-violation-list';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-garage',
  templateUrl: './new-garage.component.html',
  styleUrls: ['./new-garage.component.scss']
})
export class NewGarageComponent implements OnInit {

  public garage: Garage = {
    name: "",
    street: undefined,
    streetComplement: undefined,
    postalCode: undefined,
    city: undefined,
    owner: "",
  };

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(garage: Garage): void {
    this.httpClient.post<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages', garage).subscribe({
      next: (createdGarage) => {
        // Use a html message (<div>) and ngIf to inform the garage creation.
        // alert('Garage ' + createdGarage['@id'] + ' created.');

        // Redirect list / details
        this.router.navigate(['/garage-list']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
          // alert(this.violationList['hydra:description']);
        } else {
          // Inform the garage that an error occurred (display a better message then my example).
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }

}
