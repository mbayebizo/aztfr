import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstanteService {
  public static baseOption() {
    const _headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return { headers: _headers };
  }

  public static getErrorMessage(error): string {
    if (error.status === 900) {
      return 'Téléchargement impossible, Fichier introuvable!';
    }
    if (error.status === 401 || error.status === 403) {
      return 'Problème de sécurité, verifiez que vous avez les droits necessaires';
    } else if (error.status >= 400 && error.status < 500) {
      return error.error;
    } else {
      return error.error && error.error.status >= 500
        ? error.error.message
        : 'Problème de connexion, verifiez que le serveur est en marche' + error.error.message;
    }
  }

  public static getDatas(data): any[] | any {
    return data !== null && data.hasOwnProperty('content') ? data.content : data;
  }

  public static getTotalElements(data): number {
    return !data
      ? 0
      : data.hasOwnProperty('totalElements')
        ? data.totalElements
        : data.hasOwnProperty('length')
          ? data.length
          : 0;
  }

  public static getOwnProperty(data, property?) {
    if (!data || !property) {
      return data;
    }
    return data.hasOwnProperty(property) ? data[property] : data;
  }

  public static checkReturn(response) {
    if (response !== null) return true;
    return response === null
      || response.hasOwnProperty('id')
      || response.hasOwnProperty('code')
      || (response.hasOwnProperty('status') && response.status === 'OK');
  }




}
