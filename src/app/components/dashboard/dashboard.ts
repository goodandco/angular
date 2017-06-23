import {Component, OnInit} from '@angular/core';
import {Select2Module} from 'ng2-select2';

import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})


export class DashboardComponent implements OnInit {

    public heroes: Hero[] = [];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }

    getHeroesForSelect(): { id: number, text: string }[] {
        return this.heroes.map(hero => {
            return {
                id: hero.id,
                text: hero.name
            };
        });
    }
}