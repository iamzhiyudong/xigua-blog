export class CreateArticleDto {
  readonly tag_id: number;
  readonly title: string;
  readonly desc: string;
  readonly content: string;
  readonly cover_image_url: string;
  readonly created_on: string;
  readonly created_by: string;
  readonly modified_on: string;
  readonly modified_by: string;
  readonly deleted_on: string;
  readonly state: number;
}
