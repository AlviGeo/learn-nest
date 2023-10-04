import { IsNotEmpty, IsNumber, IsString, IsAlpha } from 'class-validator';

export class CreateHeroDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsAlpha()
  nama: string;

  @IsString()
  type: string;

  @IsString()
  gambar: string;
}
