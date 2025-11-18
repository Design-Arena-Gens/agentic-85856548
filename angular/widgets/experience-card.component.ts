import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

type AngularProject = {
  title: string;
  description: string;
  metrics: string[];
};

@Component({
  selector: "app-experience-card",
  template: `
    <section class="container">
      <header class="header">
        <p class="eyebrow">Angular Delivery</p>
        <h3 class="title">High-trust engineering workflows</h3>
        <p class="subtitle">
          Reusable Angular assets powering design system parity and hybrid
          React-to-Angular collaborations.
        </p>
      </header>

      <ul class="focus-chips">
        <li class="chip" *ngFor="let focus of normalizedFocusAreas">
          {{ focus }}
        </li>
      </ul>

      <div class="projects">
        <article class="project" *ngFor="let project of normalizedProjects">
          <h4 class="project-title">{{ project.title }}</h4>
          <p class="project-description">{{ project.description }}</p>
          <ul class="metrics">
            <li class="metric" *ngFor="let metric of project.metrics">
              {{ metric }}
            </li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        color: #e2e8f0;
        font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
      }
      .container {
        position: relative;
        display: grid;
        gap: 1.5rem;
      }
      .header {
        display: grid;
        gap: 0.75rem;
      }
      .eyebrow {
        font-size: 0.7rem;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: rgba(148, 163, 184, 0.8);
      }
      .title {
        font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.75rem);
        font-weight: 600;
        margin: 0;
        color: #f8fafc;
      }
      .subtitle {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.5;
        color: rgba(148, 163, 184, 0.85);
      }
      .focus-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .chip {
        padding: 0.45rem 0.75rem;
        border-radius: 9999px;
        background: rgba(59, 130, 246, 0.15);
        border: 1px solid rgba(59, 130, 246, 0.35);
        font-size: 0.75rem;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #bfdbfe;
      }
      .projects {
        display: grid;
        gap: 1rem;
      }
      .project {
        padding: 1.25rem;
        background: rgba(15, 23, 42, 0.8);
        border-radius: 1.25rem;
        border: 1px solid rgba(30, 64, 175, 0.35);
        box-shadow: 0 25px 60px rgba(15, 23, 42, 0.6);
      }
      .project-title {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #bfdbfe;
      }
      .project-description {
        margin: 0.75rem 0;
        font-size: 0.95rem;
        line-height: 1.55;
        color: rgba(226, 232, 240, 0.9);
      }
      .metrics {
        margin: 0;
        padding-left: 1.1rem;
        display: grid;
        gap: 0.35rem;
        font-size: 0.85rem;
        color: rgba(148, 163, 184, 0.95);
      }
      .metric {
        line-height: 1.4;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardComponent implements OnChanges {
  @Input() projects: AngularProject[] | undefined;
  @Input() focusAreas: string[] | undefined;

  normalizedProjects: AngularProject[] = [];
  normalizedFocusAreas: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["projects"]) {
      this.normalizedProjects = Array.isArray(this.projects)
        ? this.projects
        : [];
    }
    if (changes["focusAreas"]) {
      this.normalizedFocusAreas = Array.isArray(this.focusAreas)
        ? this.focusAreas
        : [];
    }
  }
}
