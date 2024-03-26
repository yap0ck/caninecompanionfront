import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {WeightAllDTO} from "../../../../models/Weight";
import {DogService} from "../../../../services/dog.service";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import type = _default.defaults.animations.numbers.type;
import {Chart} from "chart.js";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-weight-all',
  templateUrl: './weight-all.component.html',
  styleUrl: './weight-all.component.css'
})
export class WeightAllComponent implements OnInit, OnDestroy, AfterViewInit{
  weights: WeightAllDTO[]=[]
  $destroyed= new Subject<boolean>()
  chart: any
  form: FormGroup;
  dogId;


  constructor(private readonly _dogService: DogService,
              private readonly _activatedRoute:ActivatedRoute,
              private readonly _formBuilder: FormBuilder) {
    this.dogId = this._activatedRoute.snapshot.params['id']
    this.form= this._formBuilder.group({
      dogId: this.dogId,
      weight: this._formBuilder.control(null, Validators.required)
    })

  }

  ngOnInit(){
    this.dogId = this._activatedRoute.snapshot.params['id']
    this.form= this._formBuilder.group({
      dogId: this.dogId,
      weight: this._formBuilder.control(null, Validators.required)
    })
      this._dogService.GetAllWeightByDog(this.dogId).subscribe({
        next: (value)=> {
          this.weights = value;
          this.createChart(this.weights.map(e => e.date), this.weights.map(e => e.weight))
      }});
    }

    ngAfterViewInit() {

    }

  create(){
      this._dogService.createWeight(this.form.value)
        .pipe(takeUntil(this.$destroyed))
        .subscribe(()=>{
          this.form.reset()
          this.chart.destroy()
          this.ngOnInit()
        })

    }

    createChart(date: Date[], weights:number[]){
      this.chart = new Chart("weightChart", {
        type: "line",
        data: {
          labels: date,
          datasets:[{
            label: "Poids (Kg)",
            data: weights
          }]
        }
      })
    }

    ngOnDestroy(){
      this.$destroyed.next(true);
      this.$destroyed.complete();
    }
}
