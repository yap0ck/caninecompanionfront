import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {DogService} from "../../../services/dog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {inThePast} from "../../../validators/ValidatorsCustoms";
import {BreedDTO} from "../../../models/Breed";
import {Message} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {BreedCreateComponent} from "../breed-create/breed-create.component";

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrl: './dog-create.component.css'
})
export class DogCreateComponent implements OnDestroy{
  dogForm: FormGroup;
  $destroyed= new Subject<boolean>();
  breeds:BreedDTO[]=[]
  messages:Message[]=[]

  constructor(private readonly _dogService: DogService,
              private readonly _formBuilder:FormBuilder,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _dialogService: DialogService) {
    this.dogForm = this._formBuilder.group({
      firstName: this._formBuilder.control('', Validators.required),
      lastName: this._formBuilder.control(''),
      dateOfBirth: this._formBuilder.control('', [Validators.required, inThePast]),
      sex: this._formBuilder.control('', Validators.required),
      isSterilized: this._formBuilder.control(''),
      breedId: this._formBuilder.control(''),
      ownerId: this._activatedRoute.snapshot.params['id']
    })
  }

  ngOnInit(): void {
      this.getBreeds();
  }

  create(){
    this._dogService.create(this.dogForm.value)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(()=> {
        this._router.navigate(['/chien']);
      });
  }

  getBreeds(): void {
      this._dogService.getAllBreed()
        .pipe(takeUntil(this.$destroyed))
        .subscribe({
          next: (value) => {
            this.breeds = value
          },
          error: (error) => {
            this.messages = [{
              severity: "error",
              summary: error.error.detail,
              detail: error.error.message
            }]
          }
        });
  }

  ngOnDestroy(): void {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }

  showCreateBreed() {
    const ref = this._dialogService.open(BreedCreateComponent,{
      header: 'Création de race',
      width: '70%',
      height: '70%',
      baseZIndex: 10000,
      maximizable: true
    });
    ref.onClose.subscribe(()=> this.ngOnInit())
  }
}
