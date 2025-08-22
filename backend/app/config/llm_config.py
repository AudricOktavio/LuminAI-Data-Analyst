from langchain_openai import ChatOpenAI
from langchain_groq import ChatGroq
from langchain_ollama import ChatOllama
from app.config.env import GROQ_API_KEY, OPENAI_API_KEY


class LLM:
    def __init__(self):
        self.llm = None
        self.platform = None

    def groq(self, model: str = "mixtral-8x7b-32768"):
        self.llm = ChatGroq(api_key=GROQ_API_KEY, model=model)
        self.platform = "Groq"
        return self.llm

    def openai(self, model: str = "gpt-3.5-turbo"):
        self.llm = ChatOpenAI(api_key=OPENAI_API_KEY, model=model)
        self.platform = "OpenAI"
        return self.llm

    def ollama(self, model: str = "llama2"):
        self.llm = ChatOllama(model=model)
        self.platform = "Ollama"
        return self.llm

    def get_llm(self):
        return self.llm

    def invoke(self, prompt: str):
        return self.llm.invoke(prompt)
