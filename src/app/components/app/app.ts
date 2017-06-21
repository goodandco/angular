import {Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import {HeroService} from '../../services/hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}