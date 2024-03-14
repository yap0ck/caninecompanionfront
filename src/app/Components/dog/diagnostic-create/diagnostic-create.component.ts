import { Component } from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {DogService} from "../../../services/dog.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-diagnostic-create',
  templateUrl: './diagnostic-create.component.html',
  styleUrl: './diagnostic-create.component.css'
})
export class DiagnosticCreateComponent {
  form: FormGroup;
  submissivePositionOption;
  agressivityWithHumanOption;
  agressivityWDogs;
  agressivityWAnimals;
  anxietyStayAlone;
  affrayedOption;
  contactWHumanOption;
  contactWanimalsOption;
  adaptabilityOption;
  attachementOption;
  separationOption;
  restPlaceOptions;
  explorationOption;
  tendernessOption;
  vocalizeOption;
  jumpOnPeopleOption;
  destructOption;
  scratchesBruisesOption;
  excitationOption;

  constructor(private readonly _dogService: DogService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private readonly _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      submissivePosition: this._formBuilder.control('', Validators.required),
      withFamiliarHuman: this._formBuilder.control('', Validators.required),
      withStranger: this._formBuilder.control('', Validators.required),
      withDogs: this._formBuilder.control('', Validators.required),
      withOtherAnimals: this._formBuilder.control('', Validators.required),
      stayingAlone: this._formBuilder.control('', Validators.required),
      affrayed: this._formBuilder.control('', Validators.required),
      contactWHumans: this._formBuilder.control('', Validators.required),
      contactWAnimals: this._formBuilder.control('', Validators.required),
      adaptability: this._formBuilder.control('', Validators.required),
      attachement: this._formBuilder.control('', Validators.required),
      separation: this._formBuilder.control('', Validators.required),
      restPlace: this._formBuilder.control('', Validators.required),
      exploration: this._formBuilder.control('', Validators.required),
      tenderness: this._formBuilder.control('', Validators.required),
      vocalize: this._formBuilder.control('', Validators.required),
      jumpOnPeople: this._formBuilder.control('', Validators.required),
      destruct: this._formBuilder.control('', Validators.required),
      scratchesBruises: this._formBuilder.control('', Validators.required),
      excitation: this._formBuilder.control('', Validators.required),
      dogId: this.config.data.id
    });
    this.submissivePositionOption = [
          {label: 'Facile avec tout le monde', value: 0},
          {label: 'Assez facile', value: 1},
          {label: 'Possible', value: 2},
          {label: 'Difficile, possible avec 1 seul', value: 3},
          {label: 'Impossible', value: 5}
        ];
    this.agressivityWithHumanOption=[
      {label: 'Ni grognement, ni morsure', value: 0},
      {label: 'Quelques grognements', value: 1},
      {label: 'Grognements et pincements', value: 2},
      {label: 'Morsures sans gravité', value: 3},
      {label: 'Morsures vulnérantes', value: 5}
    ];
    this.agressivityWDogs=[
      {label: 'Ni grognement, ni morsure', value: 0},
      {label: 'Agressions ponctuelles contrôlées', value: 1},
      {label: 'Menaces ciblées (raciste)', value: 2},
      {label: 'Bagarres ciblées (raciste)', value: 3},
      {label: 'Bagarres, menaces avec tout individu', value: 5}
    ];
    this.agressivityWAnimals=[
      {label: 'Aucune agressivité', value: 0},
      {label: 'Semble parfois les craindre, grogne', value: 1},
      {label: 'Jeux ambigus', value: 2},
      {label: 'Chasse sans succès', value: 3},
      {label: 'Chasse et attrape parfois', value: 5}
    ];
    this.anxietyStayAlone=[
      {label: 'Parfaitement possible', value: 0},
      {label: 'Rares réactions indésirables, mineures', value: 1},
      {label: 'Réactions indésirables limitées', value: 2},
      {label: 'Réactions indésirables fréquentes, marquées', value: 3},
      {label: 'Réactions constantes, très fortes', value: 5}
    ];
    this.affrayedOption=[
      {label: 'Jamais', value: 0},
      {label: 'Rares cas', value: 1},
      {label: 'Situations identifiées', value: 2},
      {label: 'Nombreuses situations', value: 3},
      {label: 'Moindre situation inhabituelle', value: 5}
    ];
    this.contactWHumanOption=[
      {label: 'Facile, amical', value: 0},
      {label: 'Généralement à l\'aise mais a ses têtes', value: 1},
      {label: 'Parfois mal à l\'aise', value: 2},
      {label: 'Inquiet, peu sociable', value: 3},
      {label: 'Evite tout humain inconnu', value: 5}
    ];
    this.contactWanimalsOption=[
      {label: 'Curieux, amical', value: 0},
      {label: 'Va au contact prudemment', value: 1},
      {label: 'Parfois mal à l\'aise', value: 2},
      {label: 'Inquiet, peu sociable', value: 3},
      {label: 'Evite tout animal inconnu', value: 5}
    ];
    this.adaptabilityOption=[
      {label: 'Excellente, pas de manifestation', value: 0},
      {label: 'Bonne, manif. organiques faibles, transitoires', value: 1},
      {label: 'Parfois du mal à s\'adapter, manif. org. mineures', value: 2},
      {label: 'Change difficilement, manif. org. marquées', value: 3},
      {label: 'Trés difficile, manif. org. fortes (syst. ou violent)', value: 5}
    ];
    this.attachementOption=[
      {label: 'Content si un membre du groupe est présent', value: 0},
      {label: 'Préférence nette pour un membre du groupe', value: 1},
      {label: 'Ne paraît pas très attaché', value: 2},
      {label: 'Manifestations exagérées à l\'acceuil', value: 3},
      {label: 'Peut suivre n\'importe qui (ou fugue)', value: 5}
    ];
    this.separationOption=[
      {label: 'Pas de manifestation', value: 0},
      {label: 'Ok si chez lui', value: 1},
      {label: 'Inquiet si tout le monde s\'en va', value: 2},
      {label: 'Inquiet si une personne s\'en va', value: 3},
      {label: 'Ne supporte pas l\'absence d\'une personne', value: 5}
    ];
    this.restPlaceOptions=[
      {label: 'Dans son panier, seul', value: 0},
      {label: 'Avec un autre être vivant', value: 1},
      {label: 'A vue d\'un humain', value: 2},
      {label: 'Au contact d\'un membre du groupe', value: 3},
      {label: 'Contact d\'une seule personne', value: 5}
    ];
    this.explorationOption=[
      {label: 'A l\aise, explore loin, revient, prend contact', value: 0},
      {label: 'Plus à l\'aise avec familiers, ne s\'éloigne jamais', value: 1},
      {label: 'Reste à vue, contact sous couvert du maître', value: 2},
      {label: 'Contact hésitant ambigu avec familiers ou non', value: 3},
      {label: 'Fui le contact avec les membres du groupe', value: 5}
    ];
    this.tendernessOption=[
      {label: 'Régulières, fréquentes, agréables pour les 2', value: 0},
      {label: 'Satisfaisant', value: 1},
      {label: 'Contact limités, peu de lien', value: 2},
      {label: 'Pas de contact agréables', value: 3},
      {label: 'Chien \"pot de colle\", étouffant', value: 5}
    ];
    this.vocalizeOption=[
      {label: 'Rare, pertinent', value: 0},
      {label: 'Pas problématique', value: 1},
      {label: 'Ennuyeux dans certaines conditions (voiture...)', value: 2},
      {label: 'Très fréquent', value: 3},
      {label: 'Insupportable', value: 5}
    ];
    this.jumpOnPeopleOption=[
      {label: 'Jamais', value: 0},
      {label: 'Pas problématique', value: 1},
      {label: 'Ennuyeux dans certaines conditions (arrivées...)', value: 2},
      {label: 'Difficile à contrôler', value: 3},
      {label: 'Insupportable', value: 5}
    ];
    this.destructOption=[
      {label: 'Jamais', value: 0},
      {label: 'Pas problématique', value: 1},
      {label: 'Ennuyeux dans certaines conditions (attention...)', value: 2},
      {label: 'fréquent et pénible', value: 3},
      {label: 'Insupportable', value: 5}
    ];
    this.scratchesBruisesOption=[
      {label: 'Jamais', value: 0},
      {label: 'Pas problématique', value: 1},
      {label: 'Le faisait, le fait moins souvent', value: 2},
      {label: 'Peu encore être très brutal dans le contact', value: 3},
      {label: 'Systématiquement brutal', value: 5}
    ];
    this.excitationOption=[
      {label: 'Jamais', value: 0},
      {label: 'Pas problématique', value: 1},
      {label: 'Quart d\'heure de folie', value: 2},
      {label: 'Fréquents, fatigants', value: 3},
      {label: 'Incessants, sans motif repérable', value: 5}
    ]
  }

  create(){
    this._dogService.createDiagnostic(this.form.value).subscribe(()=> this.ref.close())
  }

  protected readonly FormControlName = FormControlName;
}
