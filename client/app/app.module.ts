import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { FotoModule } from "./foto/foto.module";
import { PainelModule } from "./painel/painel.module";

import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

import "rxjs/add/operator/map";
import { routing } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FotoModule,
        PainelModule,
        routing
    ],
    declarations: [
        AppComponent,
        ListagemComponent,
        CadastroComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}