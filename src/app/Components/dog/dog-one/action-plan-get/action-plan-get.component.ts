import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionPlanDTO} from "../../../../models/ActionPlan";
import {Subject, takeUntil} from "rxjs";
import {ActionPlanService} from "../../../../services/action-plan.service";
import {ActivatedRoute} from "@angular/router";
import {ExerciceDisplay, ExerciceFullDTO} from "../../../../models/Exercice";

@Component({
  selector: 'app-action-plan-get',
  templateUrl: './action-plan-get.component.html',
  styleUrl: './action-plan-get.component.css'
})
export class ActionPlanGetComponent implements OnInit, OnDestroy{
  actionPlans:ActionPlanDTO[]=[];
  $destroyed=new Subject<boolean>()
  exerciceDisplayTab: ExerciceDisplay[]=[]
  exerciceDisplay!:ExerciceDisplay


  constructor(private readonly _actionPlanService: ActionPlanService,
              private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.exerciceDisplay= {id: -1, exercices:[]}
    this._actionPlanService.getAllByDog(this._activatedRoute.snapshot.params['id'])
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value) => {
          const today = new Date();
          this.actionPlans = value;
          this.actionPlans.forEach(e => {
            this.exerciceDisplay.id = e.id
            e.exercices.forEach(f => {
              if (f.date.toString()== today.toISOString().substring(0,10)) this.exerciceDisplay.exercices.push(f)
            })
            this.exerciceDisplayTab.push(this.exerciceDisplay)
          })
        },
        error: (err) => console.log(err.message())
      })
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

}
