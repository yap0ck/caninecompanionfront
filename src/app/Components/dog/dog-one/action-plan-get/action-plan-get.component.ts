import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionPlanDTO} from "../../../../models/ActionPlan";
import {Subject, takeUntil} from "rxjs";
import {ActionPlanService} from "../../../../services/action-plan.service";
import {ActivatedRoute} from "@angular/router";
import {ExerciceCheckForm, ExerciceDisplay, ExerciceFullDTO} from "../../../../models/Exercice";
import {Message} from "primeng/api";

@Component({
  selector: 'app-action-plan-get',
  templateUrl: './action-plan-get.component.html',
  styleUrl: './action-plan-get.component.css'
})
export class ActionPlanGetComponent implements OnInit, OnDestroy{
  actionPlans!:ActionPlanDTO;
  $destroyed=new Subject<boolean>()
  exerciceDisplayTab: ExerciceDisplay[]=[]
  exerciceDisplay!:ExerciceDisplay
  checkForm!: ExerciceCheckForm
  messages: Message[]=[]


  constructor(private readonly _actionPlanService: ActionPlanService,
              private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.exerciceDisplay= {id: -1, exercices:[]}
    this._actionPlanService.getLatestByDog(this._activatedRoute.snapshot.params['id'])
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value) => {
          const today = new Date();
          this.actionPlans = value;
          this.actionPlans.exercices.forEach(f => {
              if (f.date.toString()== today.toISOString().substring(0,10)) this.exerciceDisplay.exercices.push(f)
            })
            this.exerciceDisplayTab.push(this.exerciceDisplay)
          }
        ,
        error: (err) => console.log(err.message())
      })
  }

  update(id: number){
    this.checkForm = { isDone: false };
    this.checkForm.isDone = true;
    this._actionPlanService.update(id, this.checkForm).subscribe({
      next: ()=> {
        this.ngOnInit()
      },
      error: (err) => this.messages.push({severity: "error", summary: err.error.summary, detail: err.error.message})
    });
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

}
