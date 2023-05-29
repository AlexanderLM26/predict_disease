import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'mis-casas',
        loadChildren: () => import('../mis-casas/mis-casas.module').then( m => m.MisCasasPageModule)
      },
      {
        path: 'prediccion',
        loadChildren: () => import('../prediccion/prediccion.module').then( m => m.PrediccionPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'detalle',
        loadChildren: () => import('../detalle/detalle.module').then( m => m.DetallePageModule)
      },
      {
        path: 'diabetes',
        loadChildren: () => import('../diabetes/diabetes.module').then( m => m.DiabetesPageModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias.module').then( m => m.CategoriasPageModule)
      },
      {
        path: 'list-User',
        loadChildren: () => import('../list-user/list-user.module').then( m => m.ListUserPageModule)
      },
      {
        path: 'registros',
        loadChildren: () => import('../registros/registros.module').then( m => m.RegistrosPageModule)
      },
      {
        path: 'anemia',
        loadChildren: () => import('../anemia/anemia.module').then( m => m.AnemiaPageModule)
      },
      {
        path: 'cancer-pulmonar',
        loadChildren: () => import('../cancer-pulmonar/cancer-pulmonar.module').then( m => m.CancerPulmonarPageModule)
      },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
