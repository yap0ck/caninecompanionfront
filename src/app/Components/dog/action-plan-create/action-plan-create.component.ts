import {Component, OnDestroy, OnInit} from '@angular/core';
import {config, Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {ActionPlanService} from "../../../services/action-plan.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ActionPlanForm} from "../../../models/ActionPlan";
import {ExerciceForm} from "../../../models/Exercice";
import {DogService} from "../../../services/dog.service";
import {DogFullDTO} from "../../../models/Dog";

@Component({
  selector: 'app-action-plan-create',
  templateUrl: './action-plan-create.component.html',
  styleUrl: './action-plan-create.component.css'
})
export class ActionPlanCreateComponent implements OnInit, OnDestroy{
  actionPlanForm!: ActionPlanForm
  $destroyed= new Subject<boolean>()
  exerciceForm!: FormGroup
  messages:Message[]=[]
  dog!: DogFullDTO;

  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _actionPlanService: ActionPlanService,
              private readonly ref: DynamicDialogRef,
              public config: DynamicDialogConfig) {
    this.exerciceForm = this._formBuilder.group({
      name: this._formBuilder.control('', Validators.required),
      description: this._formBuilder.control('', Validators.required)
    });
    this.dog = config.data
  }

  ngOnInit() {
    this.actionPlanForm = {
      dogId: this.dog.id,
      exercices: []
    };
  }

  add(){
    this.actionPlanForm.exercices.push(this.exerciceForm.value)
    this.exerciceForm.reset();
  }

  create(){
    this._actionPlanService.createActionPlan(this.actionPlanForm).subscribe(()=> this.ref.close())
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
