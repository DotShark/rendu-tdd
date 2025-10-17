# Rendu TDD Arnaud PETIT

## 🧩 **Examen – Développement piloté par les tests (TDD)**

**Durée :** 1 heure
**Total :** 100 points

---

### 🧠 **Partie 1 – Compréhension rapide (15 points, ~10 min)**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*

Le TDD (Test-Driven Development) est une méthode de développement où l'on écrit d'abord les tests avant le code.
Un projet en TDD se construit en suivant les 3 étapes suivantes :
1. Ecrire un test qui échoue
2. Ecrire le code le plus simple possible pour que le test passe
3. Refactoriser le code pour qu'il soit plus maintenable sans casser le test

**2.** Citez deux avantages concrets du TDD. *(5 pts)*

- Le TDD permet d'avoir une couverture de tests complète?
- Les tests servent aussi de documentation et permettent donc à un nouveau développeur rejoignant le projet de mieux comprendre le code métier.

**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*

Un stub est un objet simulé qui retourne des réponses prédéfinies sans logique, utilisé pour isoler le code testé de ses dépendances. Un fake est une implémentation simplifiée fonctionnelle mais légère d'une dépendance réelle. Exemple : un stub pour une API retournerait simplement `{totalPrice: 200}`, tandis qu'un fake implémenterait partiellement la logique de la base de données.

---

### 💻 **Partie 2 – Cas pratique : gestion de panier e-commerce (85 points, ~50 min)**

#### **Contexte :**

Vous développez un système qui permet d’ajouter des produits et de calculer le total du panier.
Chaque produit a un nom et un prix. Le panier doit appliquer une **réduction de 10 %** si le total dépasse **100 €**.

---

#### **Objectif :**

Mettre en œuvre le cycle **TDD complet** pour cette fonctionnalité.

---


Le panier doit permettre :

- d’ajouter des produits (nom + prix),
- de calculer le total du panier,
- d’appliquer une réduction de 10 % si le total dépasse 100 €,
- et de renvoyer un total exact dans tous les cas.

Vous devez produire :

1. Les tests unitaires nécessaires pour valider le comportement attendu.
2. Le code correspondant (implémentation complète et propre).
3. Un code final refactorisé, lisible et cohérent.
4. Expliquez en quelques lignes comment vous intégreriez ces tests dans un pipeline CI/CD.

---

### 🧾 **Barème récapitulatif**

| Partie    | Description             |  Points |
| :-------- | :---------------------- | :-----: |
| 1         | Compréhension rapide    |    15   |
| 2.1       | Rédaction des tests     |    25   |
| 2.2       | Implémentation minimale |    25   |
| 2.3       | Refactoring             |    25   |
| 2.4       | Intégration continue    |    10   |
| **Total** |                         | **100** |

---

## 🔄 **Intégration CI/CD (déjà prête)**

Pour intégrer ces tests dans une pipeline CI/CD, il suffit de configurer un outil d'intégration continue (comme GitHub Actions, GitLab CI ou Jenkins) pour qu'il exécute automatiquement la commande `npm test` à chaque fois qu'un développeur pousse du code ou crée une pull request. Si les tests échouent, la pipeline rejette la modification et empêche le merge vers la branche principale. Cela garantit que seul du code validé par les tests atteint la production.

