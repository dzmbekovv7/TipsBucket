import { supabase } from '@/lib/supabase'
import type { IArticle } from '@/types/interfaces'

class ArticlesService {
	async getAll(): Promise<IArticle[] | null> {
		return (await supabase.from('newsound_articles').select()).data
	}
}

export const articlesService = new ArticlesService()
