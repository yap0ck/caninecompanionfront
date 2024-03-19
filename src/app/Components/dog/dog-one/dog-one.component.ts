import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, take, takeUntil} from "rxjs";
import {DogFullDTO} from "../../../models/Dog";
import {DogService} from "../../../services/dog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, Message} from "primeng/api";
import {WeightOneDTO} from "../../../models/Weight";
import {DialogService} from "primeng/dynamicdialog";
import {DogUpdateComponent} from "../dog-update/dog-update.component";

@Component({
  selector: 'app-dog-one',
  templateUrl: './dog-one.component.html',
  styleUrl: './dog-one.component.css'
})
export class DogOneComponent implements OnInit, OnDestroy{
  $destroyed= new Subject<boolean>()
  dog!: DogFullDTO | null
  messages: Message[]=[]
  displayBreed: boolean=false
  displayMorph: boolean= false;
  displayBlurr: boolean=false;
  weight!: WeightOneDTO

  constructor(private readonly _dogService: DogService,
              protected readonly _activatedRoute: ActivatedRoute,
              private readonly _confirmationService: ConfirmationService,
              private readonly _dialogService: DialogService,
              private readonly _router: Router) {
  }

  ngOnInit() {
    this._dogService.getOneDog(this._activatedRoute.snapshot.params['id'])
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value)=> {
          this.dog = value;
          this._dogService.getOneByDog(this.dog.id)
            .pipe(takeUntil(this.$destroyed))
            .subscribe({
              next: (value) => this.weight = value,
              error: (err) => this.messages.push({
                severity: "error",
                summary: err.error.summary,
                detail: err.error.message})
            })
        },
        error: (err) => this.messages.push({
          severity: "error",
          summary: err.error.summary,
          detail: err.error.message})
      });
  }

  showBreed(){
    this.displayBreed= true
    this.displayBlurr= true
  }

  hideBreed(){
    this.displayBreed= false
    this.displayBlurr= false
    this.displayMorph= false
  }

  showMorphology(){
    this.displayMorph=true
    this.displayBlurr= true
  }

  confirm(event:Event){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce chien?",
      icon: "pi pi-eclamation-triangle",
      accept: () => this.delete(),
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  delete(){
    this._dogService.delete(this.dog!.id)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next:()=> {
          this.messages.push({severity:'success', summary:'Success', detail:'Chien supprimé'});
          this._router.navigate(["client/one/", this.dog?.owner.id])
        }
      })
  }

  showUpdate(){
    const ref= this._dialogService.open(DogUpdateComponent,{
      header: 'Mise à jour',
      width: '70%',
      height: '70%',
      baseZIndex: 10000,
      maximizable: true,
      data: this.dog
    });
    ref.onClose.subscribe(()=> this.ngOnInit())
  }
  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }

}
