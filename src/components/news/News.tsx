import React, {useMemo, useState} from "react";
import s from "./News.module.css"
import {Button} from "@mui/material";

export type CategoryType = 'Politics' | 'Technology' | 'Memes';

export type NewsType = {
    id: string
    title: string
    category: CategoryType
    content: string
}

const news: NewsType[] = [{
    id: '1',
    title: 'Super news!',
    category: 'Politics',
    content: 'Electricity is cheaper backwards! Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
        ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
        'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
        ' including versions of Lorem Ipsum.'
},
    {
    id: '2',
    title: 'Super news2!',
    category: 'Technology',
    content: 'Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
        ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
        'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
        ' including versions of Lorem Ipsum.'
},
    {
    id: '3',
    title: 'Super news3!',
    category: 'Memes',
    content: 'I hate stairs, they are always up to something. Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
        ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
        'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
        ' including versions of Lorem Ipsum.'
}]

export const News = () => {
    const [chosenCategory, setChosenCategory] = useState<null | CategoryType>(null);
    const filteredNews = useMemo(() => news.filter(item => !chosenCategory || item.category === chosenCategory), [chosenCategory]);
    const changeFilter = (category: CategoryType) => () => {
        if (chosenCategory === category) {
            setChosenCategory(null)
        } else {
            setChosenCategory(category)
        }
    }
    return (
        <div className={s.Buttons}>
            <div className={s.Btns}>
                <Button
                    variant={'contained'}
                    onClick={changeFilter('Politics')}
                    color={chosenCategory === 'Politics' ? 'primary' : 'inherit'}
                    className={s.Btn}
                >Politics</Button>
                <Button
                    variant={'contained'}
                    onClick={changeFilter('Technology')}
                    color={chosenCategory === 'Technology' ? 'primary' : 'inherit'}
                >Technology</Button>
                <Button
                    variant={'contained'}
                    onClick={changeFilter('Memes')}
                    color={chosenCategory === 'Memes' ? 'primary' : 'inherit'}
                >Memes</Button>
            </div>
            {filteredNews.map(article => (
                <div className={s.Wrapper}>
                    <h2>
                        {article.title}
                    </h2>
                    <h3>{article.category}</h3>
                    <div className={s.News}>
                        <div className={s.New}>
                            <p>{article.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

