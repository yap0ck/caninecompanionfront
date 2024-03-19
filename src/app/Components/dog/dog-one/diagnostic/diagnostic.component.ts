import {Component, OnDestroy, OnInit} from '@angular/core';
import {DiagnosticDTO} from "../../../../models/Diagnostic";
import {min, Subject} from "rxjs";
import {DogService} from "../../../../services/dog.service";
import {ActivatedRoute} from "@angular/router";
import {Chart} from "chart.js";

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrl: './diagnostic.component.css'
})
export class DiagnosticComponent implements OnInit, OnDestroy{
  diagnostics: DiagnosticDTO[]=[]
  $destroyed= new Subject<boolean>()
  chart: any
  agressivityScore: number[]=[];
  anxietyScore: number[]=[];
  attachementScore: number[]=[];
  autocontrolsScore: number[]= []

  constructor(private readonly _dogService: DogService,
              private readonly _activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {

    this._dogService.getAllDiagnosticByDog(this._activatedRoute.snapshot.params['id']).subscribe({
      next: (value) => {
        this.agressivityScore = value.map(e => e.submissivePosition + e.withFamiliarHuman + e.withStranger + e.withDogs + e.withOtherAnimals);
        this.anxietyScore = value.map(e => e.stayingAlone + e.affrayed + e.contactWHumans + e.contactWAnimals + e.adaptability)
        this.attachementScore = value.map(e => e.attachement + e.separation + e.restPlace + e.exploration + e.tenderness)
        this.autocontrolsScore = value.map(e => e.vocalize + e.jumpOnPeople + e.destruct + e.scratchesBruises + e.excitation);
        this.diagnostics = value
        this.createChart(value.map(e => e.date),
          this.agressivityScore,
          this.anxietyScore,
          this.attachementScore,
          this.autocontrolsScore
          )
    }
    })
  }

  createChart(date: Date[], agressivityScore: number[], anxietyScore: number[], attachementScore: number[], autocontrolsScore: number[]) {
    const datasets = date.map((date, index)=>{
      return {
        label: date.toString(),
        data: [agressivityScore[index], anxietyScore[index], attachementScore[index], autocontrolsScore[index]]
      }
    })
    this.chart = new Chart("diagnosticChart", {
      type: 'radar',
      data: {
        labels: ['Agressivité', 'Anxiété', 'Attachement', 'Autocontrôles'],
        datasets: datasets
      },
      options:{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Evaluation'
          }
        },
        scales:{
          r:{
            suggestedMin: 0,
            suggestedMax: 25
          }
        }
      }
    })
  }

  delete(id: number){
    this._dogService.deleteDiagnostic(id).subscribe({
      next: () => {
        this.chart.destroy()
        this.ngOnInit()
      },
      error: (error) => {
        // handle error
      }
    });
  }

  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }

}
